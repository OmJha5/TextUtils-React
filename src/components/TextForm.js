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

  return (
    <>

        <div className="mb-3 mt-5">
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" value={text} onChange={onChangeText}></textarea>
            <button className="btn btn-primary" onClick={onClickToUC}>Convert To UpperCase</button>
        </div>

    </>
  )
}