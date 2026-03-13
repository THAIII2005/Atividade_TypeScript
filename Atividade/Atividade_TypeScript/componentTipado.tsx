// @ts-nocheck
import React, { useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

interface Tarefa {
    id: number;
    titulo: string;
    concluida: boolean;
}

interface ListaTarefasProps {
    tarefas: Tarefa[];
    onToggle: (id: number) => void;
}

export default function ListaTarefas({ tarefas, onToggle }: ListaTarefasProps) {
    const [filtro, setFiltro] = useState<"todas" | "pendentes" | "concluidas">("todas");

    const filtraTarefas = tarefas.filter(tarefa => {
        if (filtro === "pendentes") return !tarefa.concluida;
        if (filtro === "concluidas") return tarefa.concluida;
        return true;
    });

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Missões Questio</Text>
            
            <View style={styles.containerFiltros}>
                {(['todas', 'pendentes', 'concluidas'] as const).map((tipo) => (
                    <TouchableOpacity 
                        key={tipo} 
                        onPress={() => setFiltro(tipo)}
                        style={[styles.botao, filtro === tipo && styles.botaoAtivo]}
                    >
                        <Text style={filtro === tipo ? styles.textoAtivo : styles.textoBotao}>
                            {tipo.toUpperCase()}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
                data={filtraTarefas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={styles.cardTarefa} 
                        onPress={() => onToggle(item.id)}
                    >
                        <Text style={[styles.textoTarefa, item.concluida && styles.concluida]}>
                            {item.concluida ? "✅ " : "🚀 "} {item.titulo}
                        </Text>
                    </TouchableOpacity>
                )}
        </View>
    );
}