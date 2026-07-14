rule SuspiciousScript
{
    strings:
        $eval = "eval("
        $document_write = "document.write"
        $base64 = "atob("

    condition:
        any of them
}
