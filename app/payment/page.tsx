export default function Payment() {
    const stripeLink = "https://buy.stripe.com/test_cN2eV35FO74TaCAdQQ";
    return (
        <div className="flex text-center gap-4">
            <div>
                <h3>Choose payment plan</h3>
                <form action={stripeLink}>
                    <div>$50</div>
                    <button>buy</button>
                </form>
            </div>

            <div className="">
                <h3>Choose payment plan</h3>
                <div>$50</div>
                <a className="px-4 bg-green-500 border-2 border-zinc-400" href={stripeLink}>stripe payment link</a>
            </div>
        </div>
    )
}