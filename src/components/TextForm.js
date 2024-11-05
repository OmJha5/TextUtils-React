import React , {useState} from 'react'

export default function TextForm(props) {
    let [text , setText] = useState("")
    function onClickToUC(){
        let newText = text.toUpperCase()
        setText(newText);
    }

    function onChangeText(event){
        setText(event.target.value)
    }

    function onClickToClear() {
        setText("");
    }

    function onClickCopy(){
        navigator.clipboard.writeText(text).then(() => {
            console.log("Copy to CLipboard");
        })
        .catch(() => {
            console.log("Error Is coming while coping")
        })
    }

    function onClickPaste(){
        navigator.clipboard.readText().then((clipboardText) => {
            setText(clipboardText);
        })
        .catch(() => {
            console.log("Error Is coming while Pasting")
        })
    }

  return (
    <>

        <div className="mb-3 mt-5">
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" value={text} onChange={onChangeText}></textarea>
            <br />
            <button className="btn btn-primary" onClick={onClickToUC}>Convert To UpperCase</button> &nbsp;
            <button className="btn btn-primary" onClick={onClickToClear}>Clear</button> &nbsp;
            <button className="btn btn-primary" onClick={onClickCopy}>Copy To ClipBoard</button> &nbsp;
            <button className="btn btn-primary" onClick={onClickPaste}>Paste</button>
        </div>

        <div className="mt-3">
            <p>Your text has {(text == "") ? 0 : text.split(" ").length} words and {text.length} characters</p>
        </div>

    </>
  )
}
