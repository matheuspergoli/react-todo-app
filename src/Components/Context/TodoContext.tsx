import React from 'react'

export const TodoContext = React.createContext<any>({})

export function TodoContextProvider({ children }: any) {
	const [selectedItem, setSelectedItem] = React.useState<HTMLLIElement | null>(null)

	return (
		<TodoContext.Provider value={{ selectedItem, setSelectedItem }}>
			{children}
		</TodoContext.Provider>
	)
}
