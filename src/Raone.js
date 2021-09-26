
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import "./Raone.css";
export default class Raone extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Service X</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Worker</a>
                </li>
              </ul>

              <form class="d-flex">
                <input class="form-control me-2 head1" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success head2" type="submit">Search</button>
              </form>
              <div>
                <button class="btn btn-outline-success head" type="submit">Login</button>
                <button class="btn btn-outline-success head" type="submit">Signup</button>
              </div>
            </div>
          </div>
        </nav>
        <div class="container">
          <footer class="py-3 my-4 footer">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item" ><a href="#" class="nav-link px-5 text-muted">About</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-5 text-muted">Help</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-5 text-muted">Contact</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-5 text-muted">Terms and Condition</a></li>
            </ul>
          </footer>
        </div>
      </div>);
  }
}