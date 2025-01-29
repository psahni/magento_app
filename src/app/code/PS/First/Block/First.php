<?php
namespace PS\First\Block;

use Magento\Framework\View\Element\Template;

use Magento\Framework\Phrase;
use Magento\Framework\View\Element\Block\ArgumentInterface;


class First implements ArgumentInterface
{
    /**
     * Get Hello World message
     *
     * @return string
     */
    public function getHelloMessage(): Phrase
    {
        return __('Hello, World! This is a custom block.');
    }
}
