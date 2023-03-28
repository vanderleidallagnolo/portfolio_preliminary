var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

const SCD_START_WEB_JAVASCRIPT_MOUSEDRAGGING				            =	0;
const SCD_START_WEB_JAVASCRIPT_MENUJSTREE					            =	1;
const SCD_START_WEB_TEMPLATE_LOGINSWANWICH                              =	2;
const SCD_START_PROJECTS_ELLEVO_TRANSLATEEPRESSIONSCHATGPT	            =	3;
const SCD_START_PROJECTS_ELLEVO_AUDIT_DB                                =	4;
const SCD_START_WEB_JAVASCRIPT_DRAG_BORDER					            =	5;
const SCD_START_PROJECTS_CCMS_THUMBNAIL_CREATOR					        =	6;
const SCD_START_WEB_JAVASCRIPT_SHOWFUNCTION_SOURCEANDRESULT             =   7;
const SCD_START_WEB_API_HOW_TO_USE                                      =   8;
const SCD_START_WEB_API_SEND_SMS_VIA_TWILLIO                            =   9;

function fShowContentDetail(pContentDetailId)
{

    switch(pContentDetailId)
    {
    
        case SCD_START_WEB_JAVASCRIPT_MOUSEDRAGGING                         :

            window.open("example_mouse_drag_element.html"	                );
            break;
                                
        case SCD_START_WEB_JAVASCRIPT_MENUJSTREE                            :
            window.open("menu_js_tree_example.html"			                );
            break;

        case SCD_START_WEB_TEMPLATE_LOGINSWANWICH                           :
            window.open("swanwich_login_example.html"		                );
            break;

        case SCD_START_PROJECTS_ELLEVO_TRANSLATEEPRESSIONSCHATGPT           :
            window.open("translate_db_expressions_chatgpt.html"		        );
            break;

        case SCD_START_PROJECTS_ELLEVO_AUDIT_DB                             :
            window.open("audit_db.html"		                                );
            break;
            
        case SCD_START_WEB_JAVASCRIPT_DRAG_BORDER                           :
            window.open("div_handler_drag_border.html"		                );
            break;

        case SCD_START_PROJECTS_CCMS_THUMBNAIL_CREATOR                      :
            window.open("thumbnail_creator.html"		                    );
            break;

        case SCD_START_WEB_JAVASCRIPT_SHOWFUNCTION_SOURCEANDRESULT          :
            window.open("show_function_source_and_result.html"		        );
            break;

        case SCD_START_WEB_API_HOW_TO_USE         :
            window.open("how_to_use_an_api.html"		                );
            break;
                
        case SCD_START_WEB_API_SEND_SMS_VIA_TWILLIO         :
            window.open("send_sms_via_twillio.html"		                );
            break;
                                                            
        default:
            break;
    
    }
    // end switch(pContentDetailId)				
}
// function fShowContentDetail(pContentDetailId)