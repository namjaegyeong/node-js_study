import React, { useState } from 'react';

function MyModal(props) {
    let _tempVal = ''
    let [bShow, bShow_Set] = useState(true)
    function onChangeInput(evt) {
        // props.setMsg(evt.target.value);
        _tempVal = evt.target.value
    }
    function onOk() {
        props.setMsg(_tempVal)
        bShow_Set(false)
    }
    return (
        <div className="MyModal">
            {
                bShow ?
                    <div>
                        <h1>{props.title}</h1>
                        <input onChange={onChangeInput} />
                        <button onClick={onOk} > ok </button>
                    </div>
                    : null
            }
        </div>
    )

}

export default MyModal;