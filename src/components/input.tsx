import { useState, type ComponentProps, type ReactNode } from 'react'
import { TextInput, StyleSheet } from 'react-native'

import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/fontFamily'

type InputProps = ComponentProps<typeof TextInput>

export function Input({ ...props }: InputProps) {
    const [isFocused, setIsFocused] = useState(false)
    return (
        <TextInput
            style={[styles.input, isFocused && styles.inputFocused]}
            placeholderTextColor={colors.gray[300]}
            cursorColor={colors.gray[100]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray[100],
        flex: 1,
        height: 54,
        padding: 16,
        borderRadius: 8,
        backgroundColor: colors.gray[500],
        borderWidth: 1,
        borderColor: colors.gray[700],
    },
    inputFocused: {
        borderColor: colors.purple[600],
    },
})
