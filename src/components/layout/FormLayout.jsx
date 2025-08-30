

export const FormLayout = () => {
    return (
    <div 
    className="border-black border-2 p-6 xl:flex flex-col gap-4 items-center xl:w-[50%] sm:w-[70%] w-[100%]"
    >

        <h1
        className="text-[30px] font-bold text-center pb-6"
        >Enter Details</h1>

        <form
        className="flex flex-col gap-3 w-[100%]"
        >
            <div
            className="flex gap-3 "
            >
                <div
                className="grow"
                >
                    <input 
                    type="text" 
                    placeholder="enter first name"
                    name="firstname"
                    required
                    className="border-black border-2 w-[100%] p-2"
                    />
                </div>
                <div
                className="grow"
                >
                    <input 
                    type="text" 
                    placeholder="enter last name"
                    name="lastname"
                    required
                    className="border-black border-2 w-[100%] p-2"
                    />
                </div>
            </div>
            <div>
                <input 
                type="email" 
                placeholder="enter email address"
                name="email"
                required
                className="border-black border-2 w-[100%] p-2"
                />
            </div>
            <div>
                <textarea 
                name="message" 
                placeholder="enter your message here...."
                className="border-black border-2 resize-none w-[100%] h-[200px] p-2"
                >

                </textarea>
            </div>
            <button
            className="bg-black text-white hover:rounded-xl py-2 text-[20px] transition-all duration-200"
            >
                Submit
            </button>
        </form>
    </div>
    )
}