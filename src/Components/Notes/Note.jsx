import NoteDeleteButton from "./NotesDeleteButton";

export default function Note({ title, message, id }) {
    return (
        <div>
            <p>{title} {message}</p>
            <NoteDeleteButton id={id}/>
        </div>

    )
}