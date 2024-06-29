import { Component } from 'preact';
import '../styles/Navbar.css';

class Navbar extends Component {
  toggleNav = () => {
    document.querySelector('.nav-toggle').classList.toggle('active');
    document.querySelector('.nav-list').classList.toggle('show');
  }

  render() {
    return (
      <nav>
        <button class="nav-toggle" aria-label="toggle navigation" onClick={this.toggleNav}>
          <span class='hamburger'></span>
        </button>
        <ul class="nav-list">
          <li><a href="/" class="nav-link" onClick={this.toggleNav}>Home</a></li>
          <li><a href="/projects" class="nav-link" onClick={this.toggleNav}>Projects</a></li>
          <li><a href="/blog" class="nav-link" onClick={this.toggleNav}>Blog</a></li>
          <li><a href="/guestbook" class="nav-link" onClick={this.toggleNav}>Guestbook</a></li>
          <li><a href="https://archive.alee14.me" class="nav-link" onClick={this.toggleNav}>Archive</a></li>
          <li><a href="/contacts" class="nav-link" onClick={this.toggleNav}>Contacts</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
