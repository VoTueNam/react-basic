import React from 'react'
import Button from '@atlaskit/button'
import CheckIcon from '@atlaskit/icon/glyph/check'


export default function Todo({todo, onCheckBtnClick}) {
    return (
        <Button
            className="alo-1234"
            shouldFitContainer
            iconAfter={
                <span className="check-icon" onClick={()=> onCheckBtnClick(todo.id)}>
                    <CheckIcon primaryColor="green"/>
                </span>
        }
        >
    { todo.name }
    </Button >
    )
}
