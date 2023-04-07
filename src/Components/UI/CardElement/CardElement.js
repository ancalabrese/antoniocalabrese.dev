import React from 'react'
import Style from './CardElement.module.css'


const CardElement = (props) => {
    return (
        //     <div className={Style.card} onClick={props.clicked}>
        //         <div className={Style['card-header']} >
        //             <img className={Style['project-img']} alt={props.project.name} src={props.project.smallImage}/>
        //         </div>

        //         <div className={Style['card-title']}>
        //             <span className={Style.title}>
        //                 <p>{props.project.name}</p>
        //             </span>
        //             <span className={Style.description}>
        //                 <p>{props.project.shortDescription}</p>
        //             </span>
        //             {/* <div className={Style['language-box']}>
        //                 <p>Ruby</p>
        //             </div> */}
        //         </div>
        //     </div>
        <div className="max-w-sm border-secondary border-2 rounded-lg shadow"
            onClick={props.clicked}>

            <a href="#">
                <img className="rounded-t-lg min-h-[16em]"
                    src={props.project.smallImage} alt={props.project.name} />
            </a>

            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-secondary">{props.project.name}</h5>
                </a>
                <p className="mb-3 font-normal text-on-primary ">{props.project.shortDescription}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-secondary-light bg-primary-dark rounded-lg hover:bg-primary-light focus:ring-4 focus:outline-none focus:ring-secondary"
                    onClick={props.clicked}> Check it out!
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default CardElement; 
