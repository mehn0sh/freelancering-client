import React from 'react'

const ConfirmDelete = ({title,onConfirm, onClose, disabled,project}) => {
  return (
    <div>
        <h2 className='font-bold mb-8'>
            ایا از حذف {title} مطمئن هستید ؟
        </h2>
        <div className="flex justify-between items-center gap-x-16">
        <button
          disabled={disabled}
          className="btn btn--primary flex-1"
          onClick={onClose}
        >
          لغو
        </button>
        <button
          disabled={disabled}
          className="btn btn--danger py-3 flex-1"
          onClick={onConfirm}
        >
          تایید
        </button>
      </div>
    </div>
  )
}

export default ConfirmDelete