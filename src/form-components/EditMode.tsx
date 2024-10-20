import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [leftAttempts, setLeftAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function gainAttempt() {
        const parsed = parseInt(requestedAttempts);
        if (!isNaN(parsed)) {
            setLeftAttempts(leftAttempts + parsed);
        }
    }
    function useAttempt() {
        if (leftAttempts > 0) {
            setLeftAttempts(leftAttempts - 1);
        }
    }
    function inputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestedAttempts(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <p>Attempts Left: {leftAttempts}</p>
            <Form.Group controlId="formRequestedAttempts">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={inputChange}
                    placeholder="Enter a number"
                />
            </Form.Group>
            <Button onClick={gainAttempt}>Gain</Button>
            <Button onClick={useAttempt} disabled={leftAttempts === 0}>
                Use
            </Button>
        </div>
    );
}
