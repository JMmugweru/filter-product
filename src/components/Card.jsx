import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className="p-5 py-10 border border-slate-400 text-center transform duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between shadow-md w-full overflow-hidden">
        <img src={img} alt={title} className="object-cover mb-3" />

        <div className="mt-5 text-left p-2 grid gap-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex justify-between">
            <section className="flex flex-col gap-1">
              <span className="flex text-orange-600">
                {star} {star} {star} {star}
              </span>
              <span className="text-base">{reviews}</span>
            </section>
            <section className="flex gap-3 items-center">
              <div className="text-lg font-medium">
                <del>{prevPrice}</del> {newPrice}
              </div>

              <BsFillBagFill size={20} />
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
