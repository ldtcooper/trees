class Node

  def initialize(val)
    @value = val
    @left_child = nil
    @right_child = nil
    @parent = nil
  end

  attr_accessor :left_child, :right_child, :parent

  def end_node?
    if self.left_child || self.right_child
      false
    else
      true
    end
  end

end
