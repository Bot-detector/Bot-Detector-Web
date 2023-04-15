import jinja2
from fastapi import Request

if hasattr(jinja2, "pass_context"):
    pass_context = jinja2.pass_context
else:
    pass_context = jinja2.contextfunction


@pass_context
def https_url_for(context: dict, name: str, **path_params) -> str:
    request: Request = context["request"]
    http_url = request.url_for(name, **path_params)
    http_url = str(http_url).replace("http", "https")
    return http_url
