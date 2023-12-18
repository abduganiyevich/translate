import './index.css'
import { useRef } from 'react';
export default function Textarea(props) {
    const{placeholder,inputRef}=props;
  return (
    <div>
        <textarea className='textarea ' placeholder={placeholder} inputRef={inputRef}>
        </textarea>
    </div>
  )
}
