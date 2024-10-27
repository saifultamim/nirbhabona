
import QuestionButton from '@/utils/QuestionButton';
import React from 'react';
import { question_data } from './Question-data';
import SendMessage from '../SendMessage/SendMessage';

const Question = () => {
    return (
        <div className=''>
           <h2 className='text-black text-center text-2xl md:text-3xl lg:text-5xl font-bold mb-16'>Frequently Asked Questions</h2>
            <div className='mx-auto grid grid-cols-1 lg:grid-cols-2'>
           
                <div className=' w-full'>
                <QuestionButton questions={question_data}></QuestionButton>
              {/* {
                question_data?.map((params,idx)=>(
                <div key={idx} className='min-w-full mb-8 p-4 shadow-lg shadow-slate-400'>
                  <QuestionButton params={params}></QuestionButton>
                  </div>
                  )) */}
              {/* } */}
                </div>

       <div className=''>
     <SendMessage></SendMessage>
       </div>

            </div>
        </div>
    );
};

export default Question;