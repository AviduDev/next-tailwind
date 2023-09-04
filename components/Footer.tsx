const date = new Date().getFullYear();

export default function Footer() {
    return (
        <footer>
            &copy;{date}. All rights reserved.
        </footer>
    )
}