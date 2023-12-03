import Header from "../../components/header/Header"
import "./Supplementation.css"

const Protein = () => {
    return (
        <>
            <Header></Header>
            <div>
                <h1>PROTEIN</h1>
                <div>
                    <h2>Isolate Protein</h2>
                    <p>
                        Isolate protein is a highly concentrated form of protein that has been isolated
                        from other food sources. It is a type of protein powder that has undergone more processing
                        than a concentrate, which involves separating and collecting the purest protein fractions.
                        Protein isolate is usually at least 90% protein by volume. It is often used by athletes and
                        bodybuilders to help build muscle mass, and can also be used as a dietary supplement.
                    </p>
                </div>
                <div>
                    <h2>Whey protein</h2>
                    <p>
                        Whey protein is a byproduct of milk that gets isolated in the cheese-making process.
                        Because whey protein comes from milk, it has a high protein content and nutritional value and
                        it's a complete protein, meaning it contains all 20 amino acids, including the nine essential
                        ones that our bodies cannot produce themselves.
                    </p>
                </div>
                <div>
                    <h2>Differences between both</h2>
                    <p>
                        The main difference between whey protein concentrate and isolate is the way these two proteins are processed.
                        Whey protein isolate undergoes a filtration process that's more robust than the one that results in whey
                        concentrate, leaving it stripped of fats and carbs, leaving only pure protein behind. Whey protein, in
                        particular, contains types of amino acids that are great for muscles. However, isolate is slightly purer,
                        resulting in a higher protein concentration with less fat, carbs, calories and lactose.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Protein