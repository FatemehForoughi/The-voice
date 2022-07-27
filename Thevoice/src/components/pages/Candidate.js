import React from 'react';
import Collapsible from 'react-collapsible';
import { Ali } from '../../data/ali';
function Candidate() {
    return ( <div className='mt-20  mx-80'>
        <div className='border-b-2 border-slate-500 text-2xl font-bold	'>
            Hello Ali!
        </div>
        <div className='m-8 p-3'>
        {
            Ali.map((obj)=>(<div>
                <div className='border-slate-500 rounded-lg border bg-white bg-opacity-50 is-open:border-black  text-xl font-bold bg-white opacity-75 m-4 p-3'>
                <Collapsible  trigger={obj.songName}>
                <p className='bg-white text-sm p-2 ml-4 inline bg-orange-300 rounded-lg'>
                    mentor 1:
                    <span className='text-red-800 ml-1'>{obj.mentor1}</span>
                </p>
                <p className='bg-white text-sm p-2 m-4 inline bg-orange-300 rounded-lg'>
                    mentor 2:
                    <span  className='text-red-800 ml-1'>{obj.mentor2}</span>
                </p>
                <p className='bg-white text-sm p-2 m-4 inline bg-orange-300 rounded-lg'>
                    mentor 3:
                    <span  className='text-red-800 ml-1'>{obj.mentor3}</span>
                </p>
                <div className='bg-white text-sm p-2 m-4 inline bg-orange-300 rounded-lg ml-[200px]'>average score:
               <span  className='text-sm ml-2 text-red-800'>{Math.floor((obj.mentor1 + obj.mentor2 + obj.mentor3)/ 3)}</span>
            </div>
                <p className='text-sm pt-4'>
            Date:{obj.date}
                </p>
               
              </Collapsible>
              </div>
            </div>
            ))
        }
       </div>
        </div>
     );
}

export default Candidate;