import { colors } from '@/styles/colors'
import { useState, type ComponentProps } from 'react'
import { Pressable, StyleSheet, type StyleProp, type ViewStyle } from 'react-native'

type ButtonProps = ComponentProps<typeof Pressable> & {
    variant?: 'primary' | 'secondary'
    style?: StyleProp<ViewStyle>
}
export function Button({
    children,
    style,
    variant = 'primary',
    ...props
}: ButtonProps) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles[variant],
                pressed && styles[`${variant}Focus`],
                style,
            ]}
            {...props}
        >
            {children}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    primary: {
        width: 52,
        height: 52,
        padding: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: colors.blue[600],
    },
    primaryFocus: {
        backgroundColor: colors.blue[400],
    },
    secondary: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: 'transparent',
    },
    secondaryFocus: {
        backgroundColor: colors.gray[400],
    },
})