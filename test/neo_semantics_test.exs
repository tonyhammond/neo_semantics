defmodule NeoSemanticsTest do
  use ExUnit.Case
  # doctest NeoSemantics

  test "greets the world" do
    Application.get_env(:bolt_sips, Bolt) |> Bolt.Sips.start_link()
    assert Bolt.Sips.conn() |> NeoSemantics.hello()
  end
end
