import Footer from "./Footer"
import Header3 from "./Header3"
import "./Faqs.css";

const Faqs= ()=>{
    return(
        <div>
            {/* Header */}
            <Header3 />
            {/* Body */}
            <div className="container">
            <h4>Groceteria</h4>
            <p> 
                Kindly check the FAQ below if you are not very familiar with the functioning of this website. If your query is of urgent nature and is different from the set of questions then please contact us at:
                <br/>Email: customerservice@groceteria.com
                <br/>Call us: 1800920920
            </p>

            <div className="divheader">
                <h4>Registration</h4>
            </div>
            {/* Question-Answer */}
            <h5>How do I register?</h5>
            <p>
                You can register by clicking on the "Register" link at the top right corner of the homepage. Please provide the information in the form that appears. You can review the terms and conditions and submit the registration information.
            </p>
            
            <hr/>
            
            <h5>Are there any charges for registration?</h5>
            <p>
               No. Registration on groceteria.com is absolutely free.
            </p>
            <hr/>

            <h5>Do I have to necessarily register to shop on bigbasket?</h5>
            <p>
            You can surf and add products to the cart without registration but only registered shoppers will be able to checkout and place orders.
            </p>
            <hr/>

            <h5>Can I have multiple registrations?</h5>
            <p>
            Each email address and contact phone number can only be associated with one Groceteria account.
            </p>
            <hr/>  

            <h5>Can I have multiple accounts with same mobile number and email id?</h5>
            <p>
            Each email address and phone number can be associated with one Groceteria account only.

            </p>
            <hr/>
            
            <div className="divheader">
                 <h4>Account Related</h4>
            </div>
            {/* Question-Answer */}
            <h5>What is My Account?</h5>
            <p>
            My Account is the section you reach after you log in at groceteria.com. My Account allows you to track your active orders as well as see your order history and update your profile.
            </p>
            <hr/>
 
            <div className="divheader">
                 <h4>Delivery Related</h4>
            </div>
            {/* Question-Answer */}
            <h5>When will I receive my order?</h5>
            <p>
            Once you are done selecting your products and click on checkout. Your order will be delivered to you on the same day or depending upon your location it may take 2 to 7 days.
            </p>
            <hr/>
            
            <h5>How are the fruits and vegetables packaged?</h5>
            <p>
            Fresh fruits and vegetables are hand picked, hand cleaned and hand packed in reusable plastic trays covered with cling. We ensure hygienic and careful handling of all our products.
            </p>
            <hr/>

            <h5>How are the fruits and vegetables weighed?</h5>
            <p>
            Every fruit and vegetable varies a little in size and weight. While you shop we show an estimated weight and price for everything priced by kilogram. At the time of delivery we weigh each item to determine final price. This could vary by a maximum of one unit weight depending on the article. In case the weight of the product is lesser than what you ordered, you will pay correspondingly less.
            </p>
            <hr/>

            <h5>How will the delivery be done?</h5>
            <p>
            We have a dedicated team of delivery personnel and a fleet of vehicles operating across the city which ensures timely and accurate delivery to our customers.
            </p>
            <hr/>

            <h5>How do I change the delivery info (address to which I want products delivered)?</h5>
            <p>
            You can change your delivery address on our website once you log into your account. Click at the top left hand corner and go to the "Profile" section to change your delivery address.
            </p>
            <hr/>

            <div className="divheader">
                 <h4>Order Related</h4>
            </div>
            {/* Question-Answer */}
            <h5>Is it possible to order an item which is out of stock?</h5>
            <p>
            No you can only order products which are in stock. We try to ensure availability of all products on our website however due to supply chain issues sometimes this is not possible.
            </p>
            <hr/>

            <h5>How do I check the current status of my order?</h5>
            <p>
            The only way you can check the status of your order is by contacting our customer support team.
            </p>
            <hr/>

            <h5>What You Receive Is What You Pay For</h5>
            <p>
            At the time of delivery, we advise you to kindly check every item as in the invoice. Please report any missing item that is invoiced. As a benefit to our customers, if you are not available at the time of order delivery or you haven’t checked the list at the time of delivery we provide a window of 48hrs to report missing items. This is applicable only for items that are invoiced.
            </p>
            <hr/>

            <div className="divheader">
                 <h4>Customer Related</h4>
            </div>
            {/* Question-Answer */}
            <h5>How do I contact customer service?</h5>
            <p>
            Our customer service team is available throughout the week, all seven days from 6 am to 10 pm. They can be reached at 1800920920 or via email at customerservice@groceteria.com
            </p>
            <hr/>

            <h5>What are your timings to contact customer service?</h5>
            <p>
            Our customer service team is available throughout the week, all seven days from 6 am to 10 pm.
            </p>
            <hr/>

            <h5>How can I give feedback on the quality of customer service?</h5>
            <p>
            Our customer support team constantly strives to ensure the best shopping experience for all our customers. We would love to hear about your experience with Groceteria. Do write to us customerservice@groceteria.com in case of positive or negative feedback.
            </p>
            <hr/>

            <h5>How do I raise a claim with customer service for any of the Guarantees - Delivery Guarantee, Quality Guarantee?</h5>
            <p>
            If you face any issues with price, quality or delivery of products we will take every measure to address the issue and make it up to you. Please contact our customer support team with details or your order as well as the issue you faced.
            </p>
            <hr/>

            <h5>Will Groceteria ask for sensitive information such as bank account details, PIN number, card number?</h5>
            <p>
            Please note that our customer service team will never ask you to share information other than your email ID, phone number, and name registered with Groceteria. If you get any email, call or message from anyone claiming to be from Groceteria asking for sensitive information such as bank account details, PIN number, card number, etc., please do not share it.
            </p>
            <hr/>

            <div className="divheader">
                 <h4>Others</h4>
            </div>
            {/* Question-Answer */}
            <h5>Do you have offline stores?</h5>
            <p>
            No we are a purely internet based company and do not have any brick and mortar stores.
            </p>
            <hr/>

            <h5>What do I do if an item is defective (broken, leaking, expired)?</h5>
            <p>
            We have a no questions asked return policy. In case you are not satisfied with a product received you can return it to the delivery personnel at time of delivery or you can contact our customer support team and we will do the needful.
            </p>
            <hr/>

            <h5>How will I get my money back in case of a cancellation or return?</h5>
            <p>
            What are the modes of refund, the amount will be refunded to your account in 7-10 working days. Please contact customer support for any further assistance regarding this issue.
            </p>
            <hr/>

            <h5>I am a corporate/ business. Can I place orders with groceteria.com?</h5>
            <p>
            Yes, we do bulk supply of products at special prices to institutions such as schools, restaurants and corporates. Please contact as at customerservice@groceteria.com to know more.
            </p>
            <hr/>

            <h5>I'd like to suggest some products. Who do I contact?</h5>
            <p>
            If you are unable to find a product or brand that you would like to shop for, please write to us at customerservice@groceteria.com and we will try our best to make the product available to you.
            </p>
            <hr/>

            <h5>How & where I can give my feedback?</h5>
            <p>
            We always welcome feedback, both positive and negative from all our customers. Please feel free to write to us at customerservice@bigbasket.com, or call us on 1800920920 and we will do our best to incorporate your suggestions into our system.
            </p>
            <hr/>

            <h5>There is a difference in the amount mentioned in the invoice sent by the store and the order value shown by groceteria when placing the order. Why should I pay the extra amount?</h5>
            <p>
            Fruits and Vegetables are natural products that come in different shapes and sizes. While we have a strict control on the average sizes and weights, there is always scope for weight to vary from your ordered quantity. As a process we make sure that in all conditions only a maximum of one unit can go extra and hence you will be changed for the extra unit quantity.
            </p>
            <hr/>

            </div>
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Faqs