import GradioComponent from "../components/gradio";

export default function Page() {
  return (
    <div>
      <h1>
        <a href="https://huggingface.co/spaces/DavidRussell/hamburger_or_hotdog/tree/main">
          Hotdog vs Hamburger classifier
        </a>
        . This classifier uses a fine tuned{" "}
        <a href="https://pytorch.org/hub/pytorch_vision_resnet/">resnet</a>{" "}
        model and is hosted on{" "}
        <a href="https://huggingface.co/spaces">hugging faces spaces</a> using
        the <a href="https://gradio.app/">Gradio</a> interface.
      </h1>

      <GradioComponent src="https://davidrussell-hamburger-or-hotdog.hf.space" />
    </div>
  );
}
