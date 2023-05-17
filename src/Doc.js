import React, {useState} from 'react'

async function Doc() {
    const response = await fetch('https://www.markdownguide.org/api/v1/basic-syntax.json');
    const data = await response.json();
    return (

        <div className='doc'>
            {
                data.basic_syntax.map((obj, i) => {
                    return (
                        <>
                            <div className='docObject' key={i}>
                                <p className='one'>{obj.name}</p>
                                <p className='two'>{obj.description}</p>
                                {
                                    obj.examples.map((ex, i) => {
                                        return (
                                            <>
                                                <div className='con' key={i}>
                                                    <p className='three'>Example :</p>
                                                    <p className='three'>Markdown :</p>
                                                    <p className='seven'>{ex.markdown}</p>
                                                    <p className='three'>HTML :</p>
                                                    <p className='seven'>{ex.html}</p>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                                {
                                    obj.additional_examples.map((ex, i) => {
                                        return (
                                            <>
                                                <div className='con' key={i}>
                                                    <p className='three'>Example :</p>
                                                    <p className='three'>Name :</p>
                                                    <p className='seven'>{ex.name}</p>
                                                    <p className='three'>Description :</p>
                                                    <p className='seven'>{ex.description}</p>
                                                    <p className='three'>Markdown :</p>
                                                    <p className='seven'>{ex.markdown}</p>
                                                    <p className='three'>HTML :</p>
                                                    <p className='seven'>{ex.html}</p>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Doc
