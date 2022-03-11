package com.killchain.apollo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

  @GetMapping("/test")
  public String test() {
    return "test";
  }

//    @Autowired
//    final private OAuth2AuthorizedClientService authorizedClientService;
//
//    public AuthController(OAuth2AuthorizedClientService authorizedClientService) {
//        this.authorizedClientService = authorizedClientService;
//    }

//    @GetMapping("/user")
//    public Map<String, Object> user(HttpServletRequest httpServletRequest, OAuth2AuthenticationToken authentication) {
//        if (authentication == null) {
//            HashMap<String, Object> map = new HashMap<>();
//
//            map.put("login", "/login");
//        }
//        else {
//            OAuth2AuthorizedClient client = authorizedClientService.loadAuthorizedClient(authentication.getAuthorizedClientRegistrationId(), authentication.getName());
//            String userInfoEndpointUri = client.getClientRegistration().getProviderDetails().getUserInfoEndpoint().getUri();
//
//            if (userInfoEndpointUri.equals("")){
//
//            }
//        }
//
//        return Collections.singletonMap("name", "");
//    }
}
