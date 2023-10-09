import "../styles/modal.css";

function Modal({ id,collapse,title,content,closeModal }) {
    return (
        <section id={id} className="modal_container" data-display={collapse}>
            <div className="modal_content-container">
                <div className="modal-close_container"><span onClick={()=>{closeModal(false)}}>&times;</span></div>
                {title?(<h2 className="modal_title">{title}</h2>):null}
                <div className="modal_content">
                    {content}
                </div>
            </div>
        </section>
    )
}

export default Modal;