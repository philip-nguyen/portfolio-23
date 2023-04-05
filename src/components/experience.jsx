import React from 'react';
import { experiences } from '../constants';

const ExperienceCard = ({experience, isOdd}) => {
    // ${isOdd ? '' : 'col-start-3'}
    return (

        <div className={`card  col-span-2`}>
            <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                <p className='text-secondary text[16px] font-semibold'>
                    {experience.company_name}
                </p>
            </div>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'>
                        {point}
                        </li>
                ))}
            </ul>
        </div>
        
    );
};

function Experience() {
    //console.log(experiences);
    return (
        <div>
            <h2>Professional Experience</h2>
            <p>What I've done so far</p>
            <div className="grid grid-cols-4 gap-4">
                {experiences.map((experience, index) => {
                    return index % 2 === 1 ? 
                    <>
                    <div className="col-span-2"></div>
                    <ExperienceCard 
                        key={`experience-${index}`}
                        experience={experience}
                        isOdd={index % 2}
                    />
                    </>
                    :
                    <>
                    <ExperienceCard 
                        key={`experience-${index}`}
                        experience={experience}
                        isOdd={index % 2}
                    />
                    <div className="col-span-2"></div>
                    </>
                    })}
            </div>
        </div>
    )
};

export default Experience;