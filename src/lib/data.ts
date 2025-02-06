const codeTypeArray = [
  {
    preCode: `
#include <bits/stdc++.h>
using namespace std;

#define i1(x)             int x;cin>>x;
#define i2(x,y)           int x,y;cin>>x>>y;
#define i3(x,y,z)         int x,y,z;cin>>x>>y>>z;
#define i4(x,y,z,w)       int x,y,z,w;cin>>x>>y>>z>>w;

#define vin( v,n) for(int i=0;i<n;i++)cin>>v[i];
#define vinn(v,n)for(int i=1;i<=n;i++)cin>>v[i];

void vout(vector<int> v,int n){for(auto i:v)cout<<i<<" ";cout<<endl;}
void voutt(vector<int> v,int n){for(int i=1;i<=n;i++)cout<<v[i]<<" ";cout<<endl;}

#define loop(i,s,e) for(int i=s;i<e;i++)
#define loopr(i,s,e) for(int i=s;i>=e;i--)

int ceil(int a, int b) {
    if (a * b > 0) { 
        return (a + b - 1) / b;
    } else { 
        return (a + b + 1) / b;
    }
}

int int_sqrt (int a) {
 int x = sqrt(a) + 2;
while (x * x > a) x--;
return x;
}

#define MOD 1000000007 
#define INF (int)1e18 

#define pb push_back 
#define ff first 
#define ss second 
#define sz(x) ((int)(x).size()) 
#define all(x) (x).begin(), (x).end() 
 
#define no cout<<"NO"<<endl 
#define yes cout<<"YES"<<endl

#define vi vector<int>

signed main() {
    ios::sync_with_stdio(false);
    cin.tie(0);cout.precision(10);
    cout.setf(ios::fixed);`,

    postCode: `
    return 0;
}
`,

    defaultCode: `// Welcome to Ada 
`,
  },
  {
    preCode: `
#include <bits/stdc++.h>
using namespace std;

#define i1(x)             int x;cin>>x;
#define i2(x,y)           int x,y;cin>>x>>y;
#define i3(x,y,z)         int x,y,z;cin>>x>>y>>z;
#define i4(x,y,z,w)       int x,y,z,w;cin>>x>>y>>z>>w;

#define vin( v,n) for(int i=0;i<n;i++)cin>>v[i];
#define vinn(v,n)for(int i=1;i<=n;i++)cin>>v[i];

void vout(vector<int> v,int n){for(auto i:v)cout<<i<<" ";cout<<endl;}
void voutt(vector<int> v,int n){for(int i=1;i<=n;i++)cout<<v[i]<<" ";cout<<endl;}

#define loop(i,s,e) for(int i=s;i<e;i++)
#define loopr(i,s,e) for(int i=s;i>=e;i--)

int ceil(int a, int b) {
    if (a * b > 0) { 
        return (a + b - 1) / b;
    } else { 
        return (a + b + 1) / b;
    }
}

int int_sqrt (int a) {
 int x = sqrt(a) + 2;
while (x * x > a) x--;
return x;
}

#define MOD 1000000007 
#define INF (int)1e18 

#define pb push_back 
#define ff first 
#define ss second 
#define sz(x) ((int)(x).size()) 
#define all(x) (x).begin(), (x).end() 
 
#define no cout<<"NO"<<endl 
#define yes cout<<"YES"<<endl

#define vi vector<int>

void solve() {
`,

    postCode: `
}

signed main() {
    ios::sync_with_stdio(false);
    cin.tie(0);cout.precision(10);
    cout.setf(ios::fixed);

    i1(t);
    while(t--){
        solve();
    }

    return 0;
}
`,

    defaultCode: `// Welcome to Ada
`,
  },
  {
    preCode: `
#include <bits/stdc++.h>
using namespace std;

#define i1(x)             int x;cin>>x;
#define i2(x,y)           int x,y;cin>>x>>y;
#define i3(x,y,z)         int x,y,z;cin>>x>>y>>z;
#define i4(x,y,z,w)       int x,y,z,w;cin>>x>>y>>z>>w;

#define vin( v,n) for(int i=0;i<n;i++)cin>>v[i];
#define vinn(v,n)for(int i=1;i<=n;i++)cin>>v[i];

void vout(vector<int> v,int n){for(auto i:v)cout<<i<<" ";cout<<endl;}
void voutt(vector<int> v,int n){for(int i=1;i<=n;i++)cout<<v[i]<<" ";cout<<endl;}

#define loop(i,s,e) for(int i=s;i<e;i++)
#define loopr(i,s,e) for(int i=s;i>=e;i--)

int ceil(int a, int b) {
    if (a * b > 0) { 
        return (a + b - 1) / b;
    } else { 
        return (a + b + 1) / b;
    }
}

int int_sqrt (int a) {
 int x = sqrt(a) + 2;
while (x * x > a) x--;
return x;
}

#define MOD 1000000007 
#define INF (int)1e18 

#define pb push_back 
#define ff first 
#define ss second 
#define sz(x) ((int)(x).size()) 
#define all(x) (x).begin(), (x).end() 
 
#define no cout<<"NO"<<endl 
#define yes cout<<"YES"<<endl

#define vi vector<int>

`,

    postCode: ``,

    defaultCode: `signed main() {
    ios::sync_with_stdio(false);
    cin.tie(0);cout.precision(10);
    cout.setf(ios::fixed);

    // Welcome to Ada
    
    return 0;
}`,
  },
  {
    preCode: `
#include <bits/stdc++.h>
using namespace std;

#define i1(x)             int x;cin>>x;
#define i2(x,y)           int x,y;cin>>x>>y;
#define i3(x,y,z)         int x,y,z;cin>>x>>y>>z;
#define i4(x,y,z,w)       int x,y,z,w;cin>>x>>y>>z>>w;

#define vin( v,n) for(int i=0;i<n;i++)cin>>v[i];
#define vinn(v,n)for(int i=1;i<=n;i++)cin>>v[i];

void vout(vector<int> v,int n){for(auto i:v)cout<<i<<" ";cout<<endl;}
void voutt(vector<int> v,int n){for(int i=1;i<=n;i++)cout<<v[i]<<" ";cout<<endl;}

#define loop(i,s,e) for(int i=s;i<e;i++)
#define loopr(i,s,e) for(int i=s;i>=e;i--)

int ceil(int a, int b) {
    if (a * b > 0) { 
        return (a + b - 1) / b;
    } else { 
        return (a + b + 1) / b;
    }
}

int int_sqrt (int a) {
 int x = sqrt(a) + 2;
while (x * x > a) x--;
return x;
}

#define MOD 1000000007 
#define INF (int)1e18 

#define pb push_back 
#define ff first 
#define ss second 
#define sz(x) ((int)(x).size()) 
#define all(x) (x).begin(), (x).end() 
 
#define no cout<<"NO"<<endl 
#define yes cout<<"YES"<<endl

#define vi vector<int>


`,

    postCode: `
signed main() {
    ios::sync_with_stdio(false);
    cin.tie(0);cout.precision(10);
    cout.setf(ios::fixed);

    i1(t);
    while(t--){
        solve();
    }

    return 0;
}
`,

    defaultCode: `void solve() {
    // Welcome to Ada

}`,
  },
  {
    preCode: ``,
    postCode: ``,
    defaultCode: ``,
  },
];

export default codeTypeArray;
