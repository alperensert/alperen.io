import React, { FC } from "react"

interface InputInvalidFeedbackProps {
    text?: string
}

export const InputInvalidFeedback: FC<InputInvalidFeedbackProps> = ({
    text,
}) => {
    return (
        <div className="text-sm text-red-600">
            <div data-field="text_input" data-validator="notEmpty">
                {text}
            </div>
        </div>
    )
}

InputInvalidFeedback.defaultProps = {
    text: "Invalid input",
}
