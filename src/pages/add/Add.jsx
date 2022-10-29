import React, { Component, } from "react";


export default class Add extends Component {
    render() {
        return (

            <div>
                <form>
                    <legend>Student Add Form </legend>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">1.Student Id :-</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Student Id"></input>
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">2.Name :-</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Name"></input>
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">3.Grade :-</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Grade"></input>
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">4.Address :-</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Address"></input>
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">5.Town :-</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Town"></input>
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">6.Telephone Number :-</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Telephone Number"></input>
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">7.E-Mail :-</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="E-Mail"></input>
                    </div>
                    <button type="submit" class="btn btn-success">Submit</button>
                    <button type="submit" class="btn btn-danger">Delete</button>
                    <button type="submit" class="btn btn-primary">Search</button>
                    <button type="submit" class="btn btn-secondary">Updare</button>
                </form>
                
                
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Student Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Grade</th>
                            <th scope="col">Address</th>
                            <th scope="col">Town</th>
                            <th scope="col">Telephone Number </th>
                            <th scope="col">E-Mail</th>
                        </tr>
                    </thead>
                </table>

            </div>
        );
    }
}