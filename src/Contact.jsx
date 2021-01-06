import React from 'react';
const Contact = () =>{
    return (
        <React.Fragment>
        <section id="header">
            <div className="my-5">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                            <form>
                            <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Write your name...."/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Phone number"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                        <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
              </div>
                </form>
                    </div>
                </div>
            </div>
            </section>
        </React.Fragment>
    )
}
export default Contact;