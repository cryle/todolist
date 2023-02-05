import React from 'react'
import NoteForm from './NoteForm';
import RawNoteData from './App'
import Tag from '../App'

export type NewNoteProps = {
	onSubmit: (data: NoteData) => void
	onAddTag: (tag: Tag) => void
	availableTags: Tag[]
}

const NewNote = ({ onSubmit, onAddTag, availableTags }: NewNoteProps) => {
	return (
		<>
			<h1 className="my-4">New Note</h1>
			<NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
		</>
	)
}

export default NewNote