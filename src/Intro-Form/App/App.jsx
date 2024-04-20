import Form from "../Form/form"
import Principal from "../PrincipalInfo/PrincipalInfo"
import PromoBox from "../promobox/promobox"


const App = () => {
    return( 
    <>
    <section className="Container-main">
    <Principal/>
    </section>
    <div>
    <PromoBox texto="Try it free 7 days then 20$/mo. Threafter"/>
    <Form/>
    </div>
    </>
    )
}

export default App