import { Formik, Form, ErrorMessage, Field } from "formik";
import { useContext } from "react";
import { NotesContext } from "../Contexts/NotesContext";


export default function NotesForm() {
    const {add} = useContext(NotesContext)
    return (
        <Formik
            initialValues={{ title: "", message: "" }}
            validate={values => {
                const errors = {};
                if (!values.title) {
                    errors.title = "El titulo es requerido"
                } else if (!values.message) {
                    errors.message = "El mensaje es requerido"
                }
                return errors;
            }}
            onSubmit={
                (values, {setSubmitting})=>{
                    add(values.title, values.message)
                    setSubmitting(false);
                    values.title="";
                    values.message="";
                }
            }
        >
            {

                ({ isSubmitting }) => (
                    <Form className="formNotes">
                        <div className="formNotesContainer">
                            <div>
                                <label className="labelsForm" htmlFor="title">Title</label>
                                <Field type="text" name="title" className="fields"></Field>
                                <ErrorMessage name="title" component="p" />
                            </div>

                            <div>
                                <label className="labelsForm" htmlFor="message">Mensaje</label>
                                <Field className="fields textareaField" component="textarea" name="message"></Field>
                                <ErrorMessage name="message" component="p" />
                            </div>
                        </div>
                        <div className="divButton">
                            <button type="submit" className="buttonForm">
                                 {isSubmitting ? "Guardando nota..." : "Guardar nota"} 
                            </button>
                        </div>
                    </Form>
                )
            }


        </Formik>
    )
}
