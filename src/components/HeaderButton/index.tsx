
import './styles.scss'
type Props= {
    text: string,
    click: ()=> void
}

export default function HeaderButton(props: Props){
    return(
        <button className ="header-button" onClick={props.click}>{props.text}</button>
    )
}