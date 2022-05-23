import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PurchaseModal = () => {
    const [user] = useAuthState(auth)

    const handleSubmit = event => {
        console.log(event)
        event.preventDefault()
    }
    console.log(user)
    return (
        <>
            <input type="checkbox" id="purchase-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="purchase-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form
                        onClick={handleSubmit}
                        className='grid grid-cols-1 justify-items-center gap-4'>
                        <input
                            type="text"
                            placeholder="Type here"
                            class="input input-bordered w-full max-w-xs" />
                        <input
                            type="text"
                            placeholder="Type here"
                            class="input input-bordered w-full max-w-xs" />
                        <input
                            type="text"
                            placeholder="Type here"
                            class="input input-bordered w-full max-w-xs" />
                        <input
                            type="text"
                            placeholder="Type here"
                            class="input input-bordered w-full max-w-xs" />
                        <input
                            type="text"
                            placeholder="Type here"
                            class="input input-bordered w-full max-w-xs" />
                        <input
                            type="text"
                            placeholder="Type here"
                            class="input input-bordered w-full max-w-xs" />
                        <input
                            type="submit"
                            value='BUY NOW' placeholder="Type here" class="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default PurchaseModal;