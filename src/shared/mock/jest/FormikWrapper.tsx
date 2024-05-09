import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import React from 'react';

/**
 * Тестовая оболочка для работы Formik
 * @param component
 */
export function FormikWrapper<T extends FormikValues>(config: FormikConfig<T>) {
    return function FormikWrapper(component: React.JSX.Element): React.JSX.Element {
        return (
            <Formik<T> {...config}>
                <Form>
                    {component}
                </Form>
            </Formik>
        );
    };
}
