import GradioComponent from "../components/gradio";

export default function Page() {
  return (
    <div>
      <h1>Hotdog vs Hamburger classifier</h1>
      <GradioComponent src="https://davidrussell-hamburger-or-hotdog.hf.space" />
    </div>
  );
}
