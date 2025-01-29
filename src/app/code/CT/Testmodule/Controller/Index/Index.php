<?php

declare(strict_types=1);

namespace CT\Testmodule\Controller\Index;

use Magento\Framework\App\Action\HttpGetActionInterface;

class Index implements HttpGetActionInterface
{
    public function execute() {
        die("Hello, My First Module");
    }
}
