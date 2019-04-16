defmodule NeoSemantics.MixProject do
  use Mix.Project

  def project do
    [
      app: :neo_semantics,
      version: "0.1.2",
      elixir: "~> 1.8",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:ex_doc, "~> 0.19", only: :dev, runtime: false},

      {:bolt_sips, "~> 1.5"},
      {:hackney, "~> 1.15"},
      {:tesla, "~> 1.2"}
    ]
  end

end
