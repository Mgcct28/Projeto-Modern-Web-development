
import './index.scss'

type Props ={
    id: string,
    value?: string,
    label: string,
    type?: React.HTMLInputTypeAttribute,
    change?:(value: string) => void


}

export default function MyInput (props: Props) {
    return(
        <div className="my-input">
            <label htmlFor={props.id}>{props.label}:</label>
            <input 
                 id={props.id} 
                 disabled={!props.change}
                 type= {props.type === undefined ? "text" : props.type} 
                 value={props.value} 
                 onChange={e => props.change!(e.target.value)}
            />
        </div>



    )



}