import React, { useState, useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import './style.css'
import FormPost from './FormPost';
import AlertErrorImages from '../../../layouts/components/alerts/AlertErrorImages';

const ButtonImages = () => {
    const [isModelLoading, setIsModelLoading] = useState(false);
    const [model, setModel] = useState(null);
    const [imgURL, setImageURL] = useState(null)
    const [results, setResults] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [data, setData] = useState([]);

    const imageRef = useRef();
    const textInputRef = useRef();

    const loadModel = async () => {
        setIsModelLoading(true)
        try {
            const model = await mobilenet.load();
            setModel(model)
            setIsModelLoading(false)
        } catch (error) {
            console.log(error);
            setIsModelLoading(false)
        }
    }

    const identify = async (e) => {
        e.preventDefault()
        textInputRef.current.value = ''
        const results = await model.classify(imageRef.current)
        setResults(results);
    }

    const handleOnChange = (e) => {
        setImageURL(e.target.value);
        setResults([]);
    }

    useEffect(() => {
        // Memuat model TensorFlow.js ketika komponen dipasang
        loadModel();

        setShowAlert(true);
    }, []);

    useEffect(() => {
        fetchData();
    }, [])

    if (isModelLoading) {
        return <h2>Model Loading...</h2>
    }

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/available-product');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log(error);
        }
    };

    const currentFlower = results[0] && results[0].className;
    console.log(currentFlower);

    const isexist = data.filter((item) => item.name === currentFlower);
    if(Object.values(isexist).length > 0) {
        console.log('true');
            return <>{ imgURL && <FormPost imgURL={imgURL} />}</>
    } else {
        console.log('false');
        return (
            <>
                <div className="App">
                    <div className="inputHolder">
                        <input type="text" className='w-100' placeholder='Enter URL image...' ref={textInputRef} onChange={handleOnChange} />
                    </div>
                    <div className="mainWrapper">
                        <div className="mainContent">
                            <div className="imageHolder">
                                {imgURL && <img src={imgURL} alt="preview" crossOrigin='anonymous' ref={imageRef} />}
                            </div>
                            {results.length > 0 && <div className='resultsHolder'>
                                {results.map((result, index) => {
                                    return (
                                        <div className="result" key={result.className}>
                                            <span className="name">{result.className}</span>
                                            <span className="confidence">Confidence level: {(result.probability * 100).toFixed(2)}%
                                                {index === 0 && <span className='bestGuess'>Best Guess</span>}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>}
                        </div>
                        {imgURL && <button className='button' onClick={identify}>Identify image</button>}
                    </div>
                </div>
                {showAlert && <AlertErrorImages />}
            </>
        );
    }

}

export default ButtonImages;