import React from 'react';
import { Note } from '../App';
import { Navigate, useParams, Outlet, useOutletContext } from 'react-router-dom';

type NoteLayoutProps = {
	notes: Note[]
}

const NoteLayout = ({notes}: NoteLayoutProps ) => {
	const { id } = useParams()
	const note = notes.find(n => n.id === id)

	if (note == null) return <Navigate to="/" replace />

	return <Outlet context={note} />

}

export function useNote() {
	return useOutletContext<Note>()
}

export default NoteLayout