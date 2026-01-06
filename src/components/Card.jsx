import React from 'react'; 
import {USERS} from '../constants/index'

const Card = ({ card, onOpenModal}) => {

    const assignedUser = card.assignedTo ? USERS.find(u => u.id === card.assignedTo) : null; 


  return (
    <div
        onClick={() => onOpenModal(card)}
        className='bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200'
    >
        <h3 className="font-medium text-gray-800 mb-2">{card.title}</h3>{
            card.description && (
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{card.description}</p>
            )
        }

        {
            assignedUser && (
                <div className="flex items-center gap-2 mt-2">
                    <div className={`w-6 h-6 rounded-full ${assignedUser.color} flex items-center justify-center text-white text-xs font-semibold`}>
                        {assignedUser.name.charAt(0)}
                    </div>
                    <span className="text-xs text-gray-600">{assignedUser.name}</span>
                </div>
            )
        }

    </div>
  ); 
}; 

export default Card;