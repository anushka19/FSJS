import React from "react";
import Card from './Card'

const CardSection = () => {
    return (
        <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">
            We love new friends!
          </h2>
          <div className="row">
           
                <Card title="LearnCodeOnline" buttonText="My LCO App" image="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <Card title="Card title" buttonText="Let's Go" image="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <Card title="Yolo" buttonText="Submit" image="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
              {/* card removed */}
            
          </div>
        </div>
      </section>
    )
}

export default CardSection;